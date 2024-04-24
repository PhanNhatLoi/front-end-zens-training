"use client";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { styled } from "@mui/material";
import MUIInput from "@/components/MUI/Input";
import UserIconSvg from "@/components/SvgComponents/UserIconSvg";

const BodyStyled = styled("div")(
  () => `
    padding: 53px 97px;
    .logo-image {
        margin-bottom: 50px;
    }


    .text {
      margin-bottom: 32px;
      .title {
        font-size: 24px;
        color: #292C38;
        font-weight: 700;
      }
      .description {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #73778B;
      }
    }

`
);

const SignUpPage = () => {
  return (
    <AuthLayout>
      <BodyStyled className="w-full flex flex-wrap justify-center items-center">
        <div className="logo-image w-full">
          <img alt="logo" src="/images/logos/logo_01.svg" />
        </div>
        <div className="w-full text">
          <span className="block title">Create Account to Get Started</span>
          <span className="description">Sign up and get started</span>
        </div>
        <div className="w-full">
          <MUIInput
            fullWidth
            placeholder="Username"
            InputProps={{
              startAdornment: <UserIconSvg style={{ marginRight: "12px" }} />,
            }}
          />
          <MUIInput
            fullWidth
            placeholder="Username"
            InputProps={{
              startAdornment: <UserIconSvg style={{ marginRight: "12px" }} />,
            }}
          />
          <MUIInput
            fullWidth
            placeholder="Username"
            InputProps={{
              startAdornment: <UserIconSvg style={{ marginRight: "12px" }} />,
            }}
          />
        </div>
      </BodyStyled>
    </AuthLayout>
  );
};

export default SignUpPage;
