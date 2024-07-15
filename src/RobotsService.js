// import { v4 as uuidv4 } from 'uuid';
class RobotsService {
  constructor() {
    // this.robots = this.loadRobots();
    this.admins = this.loadAdmins();
  }

  loadAdmins() {
    const admins = localStorage.getItem('admins')
    return admins ? JSON.parse(admins) : [
      {
        userName: 'Sarab',
        password: '1234'
      }]
  }

  saveAdmins() {
    localStorage.setItem('admins', JSON.stringify(this.admins))
  }

  addAdmin(newAdmin) {
    this.admins = [...this.admins, newAdmin]
    console.log ('admins' ,this.admins)
    this.saveAdmins();
  }

  adminAuthentication(user) {
    const isAuthenticated = this.admins.some(admin => 
      admin.userName === user.userName && admin.password === user.password
    );

    return isAuthenticated;
  }

  // saveRobots() {
  //   localStorage.setItem('robots', JSON.stringify(this.robots));
  // }

  // loadRobots() {
  //   const robots = localStorage.getItem('robots');
  //   return robots ? JSON.parse(robots) : [
  //     {
  //       id: '1',
  //       name: 'Muzamil Khurshid',
  //       userName: 'Muzamil',
  //       email: 'muzamil.khurshid@hotmail.com'
  //     },
  //     {
  //       id:'2',
  //       name: 'Aisha Tariq',
  //       userName: 'aishat',
  //       email: 'aisha.tariq@example.pk'
  //     },
  //   ];
  // }

  // getRobots() {
  //   return this.robots;
  // }

  // addRobot(robo) {
  //   const newId = uuidv4();
  //   const newRobo = { ...robo, id: newId };
  //   this.robots = [...this.robots, newRobo];
  //   this.saveRobots();
  //   console.log(this.robots)
  // }

  // updateRobot(id, updatedRobo) {
  //   this.robots = this.robots.map( robo => {
  //     return robo.id === id ? {...robo, ...updatedRobo } : robo
  //   })
  //   this.saveRobots();
  // }

  // deleteRobot(id) {
  //   this.robots = this.robots.filter(robo => robo.id !== id)
  //   this.saveRobots();
  // }

}

export default RobotsService;