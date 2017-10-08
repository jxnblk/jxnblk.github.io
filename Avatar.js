import { Avatar } from 'jxnblk-avatar'
import styled from 'styled-components'
import { space } from 'styled-system'

const Ava = styled(Avatar)([],
  space
)

Ava.defaultProps = {
  size: 48
}

export default Avatar
