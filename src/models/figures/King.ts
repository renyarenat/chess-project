import { type Cell } from '../Cell'
import { Colors } from '../Colors'
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import { Figure, FigureNames } from './Figure'

export class King extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }

  canMove (target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyDiagonalForKing(target)) {
      return true
    }
    if (this.cell.isEmptyHorizontalForKing(target)) {
      return true
    }
    if (this.cell.isEmptyVerticalForKing(target)) {
      return true
    }
    return false
  }
}
