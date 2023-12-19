import { v4 as uuid } from "uuid";
import { HeroDeets } from "../hooks/useHero";
export interface TestimonialsListProps {
  heroics: HeroDeets | null;
}
const renderReviewScore = (score: number) => {
  const scoreRepresentationUsingACuteLilPlanetEmoji = [];
  for (let i = 0; i < score; i++) {
    scoreRepresentationUsingACuteLilPlanetEmoji.push(
      <span key={uuid()}>🪐</span>
    );
  }
  return scoreRepresentationUsingACuteLilPlanetEmoji;
};

const TestimonialsList: React.FC<TestimonialsListProps> = ({ heroics }) => (
  <>
    <ul className="testimonials">
      {heroics &&
        heroics.testimonials.map(({ name, rating, spiel, social }) => {
          return (
            <li key={name} className="test-card">
              <h4>{name}</h4>
              <a>{social}</a>
              <p>{spiel}</p>
              <p>Score / 5: {renderReviewScore(rating)}</p>
            </li>
          );
        })}
    </ul>
  </>
);

export default TestimonialsList;
