import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'
import { StyledMenuButton } from 'components/Header'
import { Moon } from 'react-feather'
import { Sun } from 'react-feather'
import { useDarkModeManager } from 'state/user/hooks'
import Row from '../Row'
const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader() {

  const [darkMode, toggleDarkMode] = useDarkModeManager()

  return (
    <StyledSwapHeader>
      <RowBetween>
        <TYPE.black fontWeight={500}>Swap</TYPE.black>
        <Row justify='end'>
          <StyledMenuButton onClick={() => toggleDarkMode()}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </StyledMenuButton>
          <Settings />
        </Row>
      </RowBetween>
    </StyledSwapHeader>
  )
}
