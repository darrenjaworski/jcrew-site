import { Carousel } from "../atoms/carousel";

export const Performances = () => {
  return (
    <section className="julianne_performances" id="performances">
      <h2 className="white performance_heading" data-testid="performances-title">Performances</h2>
      <div className="peformance_controls">
        <button id="next_arrow">next</button>
        <button id="prev_arrow">previous</button>
      </div>
      <Carousel />
    </section>
  );
};
