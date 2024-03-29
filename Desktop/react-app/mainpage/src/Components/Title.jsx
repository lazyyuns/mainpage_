const Title = ({ img, maintxt, text, padding }) => {
  const spanStyle = {
    color: '#090909',
    fontSize: '18px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.18px',
    display: 'inline-block',
    marginLeft: 7,
  };

  const subSpanStyle = {
    color: '#646464',
    textAlign: 'center',
    fontSize: '13px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: '0.13px',
  };

  return (
    <div style={{ paddingLeft: 41, paddingTop: padding ?? '25px' }}>
      <div>
        {img && (
          <img
            src={img}
            style={{
              width: '18px',
              height: '18px',
              flexShrink: 0,
              display: 'inline-block',
            }}
          />
        )}
        <span style={spanStyle}>{maintxt}</span>
      </div>
      <span style={subSpanStyle}>{text}</span>
    </div>
  );
};

export default Title;
