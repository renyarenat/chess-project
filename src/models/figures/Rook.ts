import { type Cell } from '../Cell'
import { Colors } from '../Colors'
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'
import { Figure, FigureNames } from './Figure'

export class Rook extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
