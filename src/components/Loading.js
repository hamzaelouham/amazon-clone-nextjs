function Loading({ loadingGif }) {
  return (
    <div className="h-48 flex align-baseline justify-center">
      <div></div>
      <div>
        <img src={loadingGif} height={100} width={100} alt="loading..." />
      </div>
      <div></div>
    </div>
  );
}

export default Loading;
