"use client";
import React from "react";
import { MenuItem, Select, styled, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BodyContainerStyled = styled("div")(
  ({ theme }) => `

  color: ${theme.palette.text.primary};
  display: flex;
  width: 100vw;
  height: 100vh;
  .left-content {
    height: 100%;
    padding: 40px 70px;
    .select-lang {
      width: 193px;
      height: 48px;
      border: none;
      background: #F8FBFF;
    }

  }

  .right-content {
    height: 100%;
    padding: 86px 55px 20px 55px;
    background: #F8FBFF;

    .text {
        @media (max-width: 1200px){
            padding-left: 0px;
            padding-right: 0px;
        }

        padding-left: 60px;
        padding-right: 60px;
        .title {
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 16px;
        }
        .description {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
        }
    }
  }
`
);

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <BodyContainerStyled theme={theme}>
      <div className="left-content w-full md:w-3/5">
        <div className="w-full">
          <Select
            IconComponent={() => {
              return <KeyboardArrowDownIcon className="mr-2" />;
            }}
            disabled
            className="select-lang"
            value={"English (US)"}
            renderValue={(val) => {
              return (
                <div className="flex">
                  <img alt="icon" src="/images/icons/en.svg" />
                  <span className="ml-2 font-bold">{val}</span>
                </div>
              );
            }}
          >
            <MenuItem value={"English (US)"}>English (US)</MenuItem>
          </Select>
        </div>
        {children}
      </div>
      <div className="right-content bg-primary-50 w-2/5 hidden md:block">
        <img
          alt="banner"
          src="/images/banner/auth-banner.svg"
          style={{ marginBottom: "72px" }}
        />
        <div className="text">
          <span className="block title text-greyscale-900">
            Perfect Place to Analyze Your Social Media
          </span>
          <span className="block description text-greyscale-500">
            Find out your engagement analysis, statistics and social media
            schedule.
          </span>
        </div>
      </div>
    </BodyContainerStyled>
  );
};

export default AuthLayout;
