export interface ISearchedCardProps {
  name: string;
  avatar: string;
  authorAvatar: string;
  authorFirstName: string;
  authorLastName: string;
}

export default function SearchCard(props: ISearchedCardProps) {
  return (
    <div className="card">
      <div className="contentArticle">
        <div>
          <img className="articleAvatar" src={props.avatar} alt={props.name} />
        </div>
        <div className="articleName">{props.name}</div>
      </div>
      <div className="contentAuthor">
        <div>
          <em className="author">
            by {props.authorFirstName} {props.authorLastName}
          </em>
        </div>
        <div>
          <img
            className="authorAvatar"
            src={props.authorAvatar}
            alt={props.authorAvatar}
          />
        </div>
      </div>
    </div>
  );
}
