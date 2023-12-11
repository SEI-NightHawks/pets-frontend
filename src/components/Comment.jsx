import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const Comment = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Lily",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: [],
    },
  ];
  return (
    <CommentSection
      currentUser={null}
      // {{
      //   currentUserId: "01a",
      //   currentUserImg:
      //     "https://ui-avatars.com/api/name=Riya&background=random",
      //   currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      //   currentUserFullName: "Riya Negi",
      // }}
      logIn={{
        loginLink: "/login",
        signupLink: "/signup",
      }}
      commentData={data}
      onSubmitAction={(data) => {
        console.log("check submit, ", data);
      }}
      currentData={(data) => {
        console.log("current data", data);
      }}
    />
  );
};

export default Comment;
