import React, { Component } from 'react';

module.exports.getUserProfile = (accessToken) => {
  return fetch('https://mystroapp.auth0.com/userinfo', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

module.exports.getUserMetadata = (APItoken, user_id) => {
 return fetch(`https://mystroapp.auth0.com/api/v2/users/${user_id}`,
    { method: 'GET',
      qs: { fields: 'user_metadata', include_fields: 'true' },
      headers:
      { 'content-type': 'application/json',
        authorization: `Bearer ${APItoken}` }
    })
}
