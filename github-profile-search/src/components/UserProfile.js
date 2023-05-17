import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = (props) => {
  const { avatarUrl, name, login, followers, following, publicRepos } = props.userData;

  return (
    <div className="user-profile neomorph">
      <img src={avatarUrl} alt="User Avatar" className="user-avatar neomorph-avatar" />
      <div className="user-name">{name}</div>
      <div className="user-login">{login}</div>
      <div className="user-info">
        <div className="user-info-item">
          <div className="info-label">Followers</div>
          <div className="info-value">{followers}</div>
        </div>
        <div className="user-info-item">
          <div className="info-label">Following</div>
          <div className="info-value">{following}</div>
        </div>
        <div className="user-info-item">
          <div className="info-label">Public Repos</div>
          <div className="info-value">{publicRepos}</div>
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    publicRepos: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserProfile;