import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  
  return (
    <div>
      <GitHubCalendar
        username="Muhammet-Yildiz"
        blockSize={18}
        blockMargin={8}
        color ='#D76D0B'
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;