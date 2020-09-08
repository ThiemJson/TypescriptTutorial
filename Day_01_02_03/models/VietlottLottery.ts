class VietlottLottery implements Lottery {
    numberOfWinner: string;
    constructor(_number: string, _state : number, _date : string) {
        this.numberOfWinner = _number;
        this.date = _date
        this.state = _state
    }
    state: number;
    date: string;
}
