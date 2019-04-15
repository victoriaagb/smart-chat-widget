const responseText,responseButtons,responseMedia, responseGeneric;

responseText =  {
    response_type: 'TEXT',
    payload: {
      text: 'Hey whats up'
    }
  };

responseButtons = {
    response_type: 'BUTTON',
    payload: {
      text: 'Hey whats up',
      buttons: [
        {
          title: '',
          type: '',
          url: '',
          payload: ''
        },
        {
          title: '',
          type: '',
          url: '',
          payload: ''
        }
      ]
    }
  };

responseMedia = {
    response_type: 'MEDIA',
    payload: {
      text: 'Hey whats up',
      media: {
        type : 'vedio',
        url : ''
      }
    }
  };

responseGeneric = {
  response_type: 'GENERIC',
  payload: {
    elements: [ {
      image_url : '',
      title : '',
      subtitle : '',
      buttons : [        {
        title: '',
        type: '',
        url: '',
        payload: ''
      },
      {
        title: '',
        type: '',
        url: '',
        payload: ''
      }]
    }]
  }
  };
