export default function InstaEnlarge({ image }) {
  return (
    <div className="postWrap">
      <div className="postHeadWrap">
        <div className="headImgWrap">
          <img
            src="https://images.unsplash.com/photo-1618588507085-c79565432917"
            alt=""
            className="headImg"
          />
        </div>
        <div className="userDetails">
          <h4 className="userName">sygfehgefhf</h4>
          <i className="fa fa-circle-small timeIcon"></i>
          <h4 className="postTime"> 4d</h4>
        </div>
        <span className="showMore">
          <i className="fa fa-ellipsis"></i>
        </span>
      </div>
      <div className="instapostImgWrap">
        <img src={image} alt="" className="postImg" />
      </div>
      <div className="postIcons">
        <i className="fa fa-heart"></i>
        <i className="fa fa-comment"></i>
        <i className="fa fa-paper-plane"></i>
        <i className="fa fa-bookmark markIcon"></i>
      </div>
      <div className="postDetails">
        <h6>657483 likes</h6>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text e
        </h4>
        <h5>see translation</h5>
      </div>
      <div className="postComments">
        <h4>view all comments</h4>
        <div className="searchComments">
          <p>add a comment...</p>
          <i className="fa fa-face-smile"></i>
        </div>
      </div>
    </div>
  );
}
