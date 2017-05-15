export class Login{

  private userName: string;

  constructor(userName?:string){
    this.userName = userName || '';
  }
  /* Set user name */
  setUserName(userName:string): void{
    this.userName = userName;
  }
  /* End */

  /* Get user name */
  getUserName(): string {
    return this.userName;
  }
  /* End */

}
