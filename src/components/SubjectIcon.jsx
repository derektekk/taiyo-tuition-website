import {
    Atom,
    BookOpen,
    BookText,
    ChartColumn,
    Divide,
    Dna,
    FlaskConical,
    Plus,
    Ruler,
    Target,
} from "lucide-react";

const iconsByFamily = {
    english: BookOpen,
    "maths-methods": Ruler,
    chemistry: FlaskConical,
    physics: Atom,
    biology: Dna,
    "specialist-maths": Divide,
    "general-maths": ChartColumn,
    "year-english": BookText,
    "year-maths": Plus,
    selective: Target,
};

const SubjectIcon = ({ subject, className, ...props }) => {
    const Icon = iconsByFamily[subject.family];
    if (!Icon) return null;

    return (
        <Icon
            className={className}
            strokeWidth={2}
            aria-hidden="true"
            {...props}
        />
    );
};

export default SubjectIcon;
