import playlistCover from "../../assets/images/cover/playlist.png";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const PlaylistHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="header-container">
      <div className="header-background" />
      <div className="header-content">
        <img
          src={playlistCover}
          alt="Capa da Playlist"
          className="header-cover"
        />
        <div className="info">
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
