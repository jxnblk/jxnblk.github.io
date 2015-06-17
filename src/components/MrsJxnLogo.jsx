
import React from 'react'

class MrsJxnLogo extends React.Component {

  render() {
    return (
      <svg viewBox='0 0 32 32'
        width={64}
        height={64}
        fill='currentcolor'>
        <defs>
          <clipPath id='mrs-clip'>
            <rect x='0' y='0' width='15' height='32' />
          </clipPath>
        </defs>
        <path d='M16 7 C13 7 2 9 2 16 C2 23 6 23 10 24 L11 28 L12 26 L20 26 L21 28 L22 24 C26 23 30 23 30 16 C30 9 19 7 16 7 M4 18 A4 4 0 0 1 12 18 A4 4 0 0 1 4 18 M20 18 A4 4 0 0 1 28 18 A4 4 0 0 1 20 18 '
          clipPath='url(#mrs-clip)' />
        <svg viewBox='0 0 128 128'>
          <defs>
            <clipPath id='jxn-clip'>
              <rect x='68' y='0' width='60' height='128' />
            </clipPath>
          </defs>
          <path d=' M64 0 L64 4 L76 4 L74 6 L94 14 L92 16 L104 20 L100 22 L106 28 L102 28 L106 56 Q110 62 110 70 T105 84 L96 108 C92 116 76 128 64 128 C52 128 36 116 32 108 L23 84 Q18 78 18 70 T22 56 L22 22 L26 24 L34 12 L36 16z M72 40 Q56 30 40 30 Q32 34 30 48 L30 48 L28 74 C28 81 37 102 38 104 C46 118 62 121 64 121 C66 121 82 118 90 104 C91 102 100 81 100 74 L99 52 L94 40 L92 42 L84 38 L84 42 L74 36 M57 88 H71 A2 2 0 0 1 71 92 H57 A2 2 0 0 1 57 88 M53 104 H75 A2 2 0 0 1 75 108 H53 A2 2 0 0 1 53 104 '
            clipPath='url(#jxn-clip)'/>
        </svg>
      </svg>
    )
  }

}

export default MrsJxnLogo

