const Code_recommand = (props) => {
  return (
    <div className="추천코드">
      <div>
        <span className="추천코드-text">추천코드 : {props.name}</span>{' '}
        <img src="filter_none.png" className="복사사진" />
        <span>복사하기</span>
      </div>
    </div>
  );
};

export default Code_recommand;
