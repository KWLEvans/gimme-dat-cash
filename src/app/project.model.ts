export class Project {
  constructor(public name: string, public owners: string[], public description: string, public goal: number, public rewards: string[], public currentAmount: number = 0, public id: string = null) { }
}
