export default interface ICardCompetition {
  title: string;
  organizer: string;
  rank: number;
  totalParticipants: number;
  tags: string[];
  dateStarted: Date;
  isOdd?: boolean;
}
