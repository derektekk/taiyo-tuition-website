import { Navigate, useParams } from "react-router-dom";
import HomeClose from "../components/home/HomeClose";
import SubjectCurriculum from "../components/subject/SubjectCurriculum";
import SubjectDock from "../components/subject/SubjectDock";
import SubjectFaq from "../components/subject/SubjectFaq";
import SubjectEnrol from "../components/subject/SubjectEnrol";
import SubjectHero from "../components/subject/SubjectHero";
import SubjectOffer from "../components/subject/SubjectOffer";
import SubjectProof from "../components/subject/SubjectProof";
import SubjectResources from "../components/subject/SubjectResources";
import SubjectReviews from "../components/subject/SubjectReviews";
import SubjectWayfinding from "../components/subject/SubjectWayfinding";
import SubjectWeek from "../components/subject/SubjectWeek";
import { CLOSE_ID, dockSectionsFor } from "../components/subject/sections";
import PageDoc from "../components/PageDoc";
import { subjectMeta } from "../data/pageMeta";
import { getSubjectBySlug, legacySubjectRedirects } from "../data/subjects";

/**
 * One template for every class. Order: hero, what you get, proof, week,
 * curriculum, resources, reviews, how to enrol, FAQs, wayfinding, close.
 * The portal lives inside resources. Tutors block waits on real bios.
 */
const SubjectDetailPage = () => {
    const { slug } = useParams();
    const redirectSlug = legacySubjectRedirects[slug];
    if (redirectSlug) {
        return <Navigate to={`/subjects/${redirectSlug}`} replace />;
    }

    const subject = getSubjectBySlug(slug);
    if (!subject) return <Navigate to="/subjects" replace />;

    const enrollTo = `/enroll?subject=${subject.slug}`;
    const dockSections = dockSectionsFor(subject);

    return (
        <main role="main">
            <PageDoc {...subjectMeta(subject)} />

            <SubjectHero subject={subject} enrollTo={enrollTo} />
            <SubjectOffer subject={subject} />
            <SubjectProof />
            <SubjectWeek subject={subject} />
            <SubjectCurriculum subject={subject} />
            <SubjectResources subject={subject} />
            <SubjectReviews subject={subject} />
            <SubjectEnrol subject={subject} enrollTo={enrollTo} />
            <SubjectFaq subject={subject} />
            <SubjectWayfinding subject={subject} />
            <HomeClose id={CLOSE_ID} enrollTo={enrollTo} />

            <SubjectDock key={subject.slug} sections={dockSections} />
        </main>
    );
};

export default SubjectDetailPage;
