/**
 * Soft primary blobs behind a section. Same treatment as the enrol page.
 * Parent must be `relative overflow-hidden`.
 *
 * Sizes and offsets track the viewport width (clamped) so the blobs keep the
 * same proportions on a phone as on desktop instead of one blob swallowing
 * the whole section.
 */
const BlueFuzz = () => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[clamp(4rem,9vw,8rem)] -left-[clamp(5rem,11vw,10rem)] size-[clamp(14rem,40vw,34rem)] rounded-full bg-blue-primary/50 blur-2xl md:blur-3xl" />
        <div className="absolute top-[40%] -left-[clamp(3rem,7vw,6rem)] size-[clamp(10rem,28vw,24rem)] rounded-full bg-primary/15 blur-2xl md:blur-3xl" />
        <div className="absolute -bottom-[clamp(5rem,11vw,10rem)] left-1/2 h-[clamp(12rem,35vw,30rem)] w-[clamp(18rem,52vw,44rem)] -translate-x-1/2 rounded-full bg-gradient-primary/80 blur-2xl md:blur-3xl" />
    </div>
);

export default BlueFuzz;
