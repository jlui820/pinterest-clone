import { IconButton } from '@material-ui/core';
import React from 'react';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>

      </HomePageButton>
      <FollowingButton>

      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>

        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>

      </IconsWrapper>
    </Wrapper>
  )
}

export default Header
