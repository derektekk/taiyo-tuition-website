import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const markClass = "underline decoration-2 decoration-primary";

const escapeRegExp = (value) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const RichText = ({ text, marks = [], hrefs = {} }) => {
    if (!marks.length) return text;

    const pattern = new RegExp(`(${marks.map(escapeRegExp).join("|")})`, "g");
    const parts = text.split(pattern);

    return parts.map((part, index) => {
        if (!marks.includes(part)) return part;

        if (hrefs[part]) {
            return (
                <Link key={`${part}-${index}`} to={hrefs[part]} className={markClass}>
                    {part}
                </Link>
            );
        }

        return (
            <span key={`${part}-${index}`} className={markClass}>
                {part}
            </span>
        );
    });
};

const FaqBlock = ({ block }) => {
    if (block.type === "ul") {
        return (
            <ul className="ml-4 list-inside list-disc space-y-1">
                {block.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <p>
            <RichText
                text={block.text}
                marks={block.marks}
                hrefs={block.hrefs}
            />
        </p>
    );
};

/** `itemClassName` sets the card fill; the default suits a white band. */
const FaqAccordion = ({ items, itemClassName = "bg-biege-primary" }) => {
    const [openId, setOpenId] = useState(null);

    return (
        <div className="flex flex-col gap-3">
            {items.map((faq, index) => {
                const isOpen = openId === faq.id;

                return (
                    <Reveal
                        key={faq.id}
                        delay={index * 0.1}
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        className={`cursor-pointer rounded-xl px-6 py-5 md:px-7 ${itemClassName}`}
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${faq.id}`}
                            className="flex w-full items-start justify-between gap-6 text-left"
                        >
                            <span className="body-lg font-heading font-semibold text-black">
                                {faq.question}
                            </span>
                            <motion.span
                                aria-hidden="true"
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className="h4 w-6 shrink-0 text-right font-heading font-semibold text-primary"
                            >
                                +
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={`faq-answer-${faq.id}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    onClick={(event) => event.stopPropagation()}
                                    className="overflow-hidden"
                                >
                                    <div className="body mt-3 space-y-3 text-black-primary">
                                        {faq.blocks.map((block, blockIndex) => (
                                            <FaqBlock
                                                key={`${faq.id}-${blockIndex}`}
                                                block={block}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Reveal>
                );
            })}
        </div>
    );
};

export default FaqAccordion;
