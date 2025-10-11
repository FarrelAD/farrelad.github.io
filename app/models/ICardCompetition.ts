export default interface ICardCompetition {
  title: string;
  organizer: string;
  rank: number;
  totalParticipants: number;
  tags: string[];
  isOdd?: boolean;
}
