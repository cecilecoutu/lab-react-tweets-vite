import "./ProfileImage.jsx";
import "./User.jsx";
import "./Timestamp.jsx";
import "./Message.jsx";

function Tweet() {
  /*const tweetsArray = [
    {
      user: {
        name: "Thoughts of Dog®",
        image:
          "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
        handle: "dog_feelings",
      },
      timestamp: "1h ago",
      message:
        "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
    },
  ];*/
  return (
    <>
      <div className="tweet">
        <ProfileImage
          image={
            "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
          }
        />
        ;
        <User name={USER_NAME} handle={USER_HANDLE} />
        <Timestamp time={TWEET_TIMESTAMP} />
        <Message message={TWEET_MESSAGE} />
        <Actions />
        <div className="body">
          <div className="top">
            <span className="timestamp">Nov 30, 2020</span>
          </div>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </>
  );
}

export default Tweet;
