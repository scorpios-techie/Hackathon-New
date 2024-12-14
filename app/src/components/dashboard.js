const Dashboard = () => {
  const reportUrl =
    "https://app.powerbi.com/reportEmbed?reportId=7e316968-7bca-4699-8198-4d01ec642d69&autoAuth=true&ctid=72cbf049-d068-4d07-a9b1-920a5fbed7c9";
  return (
    <div>
      <iframe
        title="CustomerFeedbackRpt"
        width="1140"
        height="541.25"
        src={reportUrl}
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};
export default Dashboard;
