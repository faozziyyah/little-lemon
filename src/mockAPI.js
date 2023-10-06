const availableTimesByDate = {
    '2023-09-24': ['10:00', '11:00', '19:20'],'2023-09-25': ['10:00', '11:00', '12:00', '13:00'],
    '2023-09-26': ['14:00', '15:00'],'2023-09-27': ['10:00', '11:00'],'2023-09-28': ['10:00', '11:00', '12:00'],
    '2023-09-29': ['11:00', '13:00', '14:00'],'2023-09-30': ['10:00', '11:00', '13:00', '15:00'],'2023-10-01': ['10:00', '11:00', '12:00'],
    '2023-10-02': ['14:00', '15:00', '16:00'],'2023-10-03': ['10:00', '11:00', '12:00'],'2023-10-04': ['14:00', '15:00', '16:00'],
    '2023-10-05': ['10:00', '11:00', '12:00'],'2023-10-06': ['14:00', '15:00', '16:00'],'2023-10-07': ['10:00', '11:00', '12:00'],
    '2023-10-08': ['14:00', '15:00', '16:00'],'2023-10-09': ['10:00', '11:00', '12:00'],'2023-10-10': ['14:00', '15:00', '16:00'],
    '2023-10-11': ['10:00', '11:00', '12:00'],'2023-10-12': ['14:00', '15:00', '16:00'],'2023-10-13': ['10:00', '11:00', '12:00'],
    '2023-10-14': ['14:00', '15:00', '16:00'],'2023-10-15': ['10:00', '11:00', '12:00'],'2023-10-16': ['14:00', '15:00', '16:00'],
    '2023-10-17': ['10:00', '11:00', '12:00'],'2023-10-18': ['14:00', '15:00', '16:00'],'2023-10-19': ['10:00', '11:00', '12:00'],
    '2023-10-20': ['14:00', '15:00', '16:00'],'2023-10-21': ['10:00', '11:00', '12:00'],'2023-10-22': ['14:00', '15:00', '16:00'],
    '2023-10-23': ['10:00', '11:00', '12:00'],'2023-10-24': ['14:00', '15:00', '16:00'],'2023-10-25': ['10:00', '11:00', '12:00'],
    '2023-10-26': ['14:00', '15:00', '16:00'],'2023-10-27': ['10:00', '11:00', '12:00'],'2023-10-28': ['14:00', '15:00', '16:00'],
    '2023-10-29': ['11:00', '12:00', '13:00', '14:00'],'2023-10-30': ['14:00', '15:00', '16:00'],'2023-10-31': ['14:00', '15:00', '16:00'],
    '2023-11-01': ['10:00', '11:00', '13:00', '14:00'],'2023-11-02': ['14:00', '15:00', '16:00'],'2023-11-03': ['10:00', '11:00', '13:00'],
    '2023-11-04': ['14:00', '15:00'],'2023-11-05': ['10:00', '12:00', '13:00'],'2023-11-06': ['14:00', '15:00', '16:00'],
    '2023-11-07': ['10:00', '11:00', '14:00'],'2023-11-08': ['14:00', '15:00', '16:00'],'2023-11-09': ['10:00', '11:00', '12:00'],
    '2023-11-10': ['14:00', '15:00', '16:00'],'2023-11-11': ['11:00', '12:00', '14:00'],'2023-11-12': ['14:00', '15:00'],
    '2023-11-13': ['11:00', '12:00', '13:00'],'2023-11-14': ['13:00', '15:00', '16:00'],'2023-11-15': ['10:00', '11:00', '12:00', '14:00'],
    '2023-11-16': ['14:00', '15:00', '16:00'],'2023-11-17': ['10:00', '11:00', '12:00'],'2023-11-18': ['14:00', '15:00', '16:00'],
    '2023-11-19': ['10:00', '11:00', '12:00'],'2023-11-20': ['14:00', '15:00', '16:00'],'2023-11-21': ['11:00', '12:00', '12:00'],
    '2023-11-22': ['14:00', '15:00', '16:00'],'2023-11-23': ['10:00', '11:00', '12:00'],'2023-11-24': ['14:00', '15:00', '16:00'],
    '2023-11-25': ['10:00', '11:00', '13:00'],'2023-11-26': ['13:00', '15:00'],'2023-11-27': ['10:00', '12:00', '13:00'],
    '2023-11-28': ['14:00', '15:00'],'2023-11-29': ['10:00', '11:00', '14:00'],'2023-11-30': ['14:00', '15:00', '16:00'],
    '2023-12-01': ['11:00', '12:00', '13:00'],'2023-12-02': ['14:00', '15:00', '16:00'],'2023-12-03': ['10:00', '11:00', '12:00'],
    '2023-12-04': ['14:00', '15:00', '16:00'],'2023-12-05': ['10:00', '11:00', '12:00', '14:00'],'2023-12-06': ['14:00', '15:00'],
    '2023-12-07': ['10:00', '11:00', '12:00', '14:00'],'2023-12-08': ['14:00', '15:00', '16:00'],'2023-12-09': ['10:00', '11:00', '12:00'],
    '2023-12-10': ['14:00', '15:00', '16:00'],'2023-12-11': ['11:00', '12:00', '13:00'],'2023-12-12': ['13:00', '15:00', '16:00'],
    '2023-12-13': ['10:00', '12:00', '14:00'],'2023-12-14': ['14:00', '15:00', '16:00'],'2023-12-15': ['10:00', '11:00', '12:00'],
    '2023-12-16': ['13:00', '15:00', '16:00'],'2023-12-17': ['10:00', '11:00', '13:00', '14:00'],'2023-12-18': ['14:00', '15:00', '16:00'],
    '2023-12-19': ['11:00', '11:00', '12:00'],'2023-12-20': ['13:00', '15:00', '16:00'],'2023-12-21': ['11:00', '12:00', '12:00', '14:00'],
    '2023-12-22': ['14:00', '15:00', '16:00'],'2023-12-23': ['10:00', '11:00', '12:00'],'2023-12-24': ['14:00', '15:00', '16:00'],
    '2023-12-25': ['10:00', '12:00', '12:00'],'2023-12-26': ['14:00', '15:00'],'2023-12-27': ['10:00', '12:00', '14:00'],
    '2023-12-28': ['14:00', '15:00', '16:00'],'2023-12-29': ['10:00', '11:00', '12:00'],'2023-12-30': ['14:00', '15:00', '16:00'],
    '2023-12-31': ['13:00', '14:00'],'2024-01-01': ['11:00', '12:00', '13:00'],'2024-01-02': ['14:00', '15:00', '16:00'],'2024-01-03': ['10:00', '11:00', '12:00'],
    '2024-01-04': ['14:00', '15:00', '16:00'],'2024-01-05': ['10:00', '11:00', '12:00', '14:00'],'2024-01-06': ['14:00', '15:00'],
    '2024-01-07': ['10:00', '11:00', '12:00', '14:00'],'2024-01-08': ['14:00', '15:00', '16:00'],'2024-01-09': ['10:00', '11:00', '12:00'],
    '2024-01-10': ['14:00', '15:00', '16:00'],'2024-01-11': ['11:00', '12:00', '13:00'],'2024-01-12': ['13:00', '15:00', '16:00'],
    '2024-01-13': ['10:00', '12:00', '14:00'],'2024-01-14': ['14:00', '15:00', '16:00'],'2024-01-15': ['10:00', '11:00', '12:00'],
    '2024-01-16': ['13:00', '15:00', '16:00'],'2024-01-17': ['10:00', '11:00', '13:00', '14:00'],'2024-01-18': ['14:00', '15:00', '16:00'],
    '2024-01-19': ['11:00', '11:00', '12:00'],'2024-01-20': ['13:00', '15:00', '16:00'],'2024-01-21': ['11:00', '12:00', '12:00', '14:00'],
    '2024-01-22': ['14:00', '15:00', '16:00'],'2024-01-23': ['10:00', '11:00', '12:00'],'2024-01-24': ['14:00', '15:00', '16:00'],
    '2024-01-25': ['10:00', '12:00', '12:00'],'2024-01-26': ['14:00', '15:00'],'2024-01-27': ['10:00', '12:00', '14:00'],
    '2024-01-28': ['14:00', '15:00', '16:00'],'2024-01-29': ['10:00', '11:00', '12:00'],'2024-01-30': ['14:00', '15:00', '16:00'],
    '2024-01-31': ['13:00', '14:00'],'2024-02-01': ['11:00', '12:00', '13:00'],'2024-02-02': ['14:00', '15:00', '16:00'],'2024-02-03': ['10:00', '11:00', '12:00'],
    '2024-02-04': ['14:00', '15:00', '16:00'],'2024-02-05': ['10:00', '11:00', '12:00', '14:00'],'2024-02-06': ['14:00', '15:00'],
    '2024-02-07': ['10:00', '11:00', '12:00', '14:00'],'2024-02-08': ['14:00', '15:00', '16:00'],'2024-02-09': ['10:00', '11:00', '12:00'],
    '2024-02-10': ['14:00', '15:00', '16:00'],'2024-02-11': ['11:00', '12:00', '13:00'],'2024-02-12': ['13:00', '15:00', '16:00'],
    '2024-02-13': ['10:00', '12:00', '14:00'],'2024-02-14': ['14:00', '15:00', '16:00'],'2024-02-15': ['10:00', '11:00', '12:00'],
    '2024-02-16': ['13:00', '15:00', '16:00'],'2024-02-17': ['10:00', '11:00', '13:00', '14:00'],'2024-02-18': ['14:00', '15:00', '16:00'],
    '2024-02-19': ['11:00', '11:00', '12:00'],'2024-02-20': ['13:00', '15:00', '16:00'],'2024-02-21': ['11:00', '12:00', '12:00', '14:00'],
    '2024-02-22': ['14:00', '15:00', '16:00'],'2024-02-23': ['10:00', '11:00', '12:00'],'2024-02-24': ['14:00', '15:00', '16:00'],
    '2024-02-25': ['10:00', '12:00', '12:00'],'2024-02-26': ['14:00', '15:00'],'2024-02-27': ['10:00', '12:00', '14:00'],
    '2024-02-28': ['14:00', '15:00', '16:00'],'2024-02-29': ['10:00', '11:00', '12:00'],'2024-02-30': ['14:00', '15:00', '16:00'],
    '2024-02-31': ['13:00', '14:00']
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
          if(availableTimesByDate[date]){
            resolve(availableTimesByDate[date])
          }
          else{
              reject(new Error('No available times for the selected date. ' + date));
          }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}