import axios from 'axios';

export function getUsers() {
     axios.get(`http://127.0.0.1:3000/users`)
      .then(res => {
        console.log(res.data)
      });
}

export function getUser(id) {
     axios.get(`http://127.0.0.1:3000/users/`+id)
      .then(res => {
        console.log(res.data)
      });
}