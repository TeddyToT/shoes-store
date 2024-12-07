import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { CiUser, CiLock, CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Layout } from "antd";
const SignUp = () => {
    const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevState) => !prevState);
  };

  return (
    <Layout>
      <Breadcrumb pageName="Đăng nhập" />

      <div className="mt-5 mb-10 rounded-sm border border-strokeshadow-default ">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                <img className="" src={logo} alt="Logo" width={400} />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

            </div>
          </div>

          <div className="w-full border-stroke  xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black  sm:text-title-xl2">
                Đăng ký ngay
              </h2>

              <div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black ">
                    Tên đăng nhập
                  </label>
                  <div className="relative">
                    {/* <CiUser size={40} /> */}
                    <input
                      type="text"
                      placeholder="Nhập tên tài khoản"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-16 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none "
                    />
                    <span className="absolute left-4 top-3">
                      <CiUser size={32} />
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black ">
                    Email
                  </label>
                  <div className="relative">
                    {/* <CiUser size={40} /> */}
                    <input
                      type="text"
                      placeholder="Nhập email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-16 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none "
                    />
                    <span className="absolute left-4 top-3">
                      <CiMail size={32} />
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black ">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                      placeholder="Nhập mật khẩu"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-16 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />

                    <span className="absolute left-4 top-3">
                      <CiLock size={32} />
                    </span>
                    {password && (<span
                      className="absolute right-4 top-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaRegEye size={24} />
                      ) : (
                        <FaRegEyeSlash size={24} />
                      )}
                    </span>)}
                    
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black ">
                    Nhập lại mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword2 ? "text" : "password"}
                      value={password2}
                      onChange={(e)=> setPassword2(e.target.value)}
                      placeholder="Nhập lại mật khẩu"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-16 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                    />

                    <span className="absolute left-4 top-3">
                      <CiLock size={32} />
                    </span>
                    {password2 && (<span
                      className="absolute right-4 top-3 cursor-pointer"
                      onClick={togglePasswordVisibility2}
                    >
                      {showPassword2 ? (
                        <FaRegEye size={24} />
                      ) : (
                        <FaRegEyeSlash size={24} />
                      )}
                    </span>)}
                    
                  </div>
                </div>

                <div className="mb-5">
                  <button className="w-full cursor-pointer rounded-lg border border-primary bg-blue-500 p-4 text-white transition hover:bg-opacity-90">
                    Đăng ký
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Đã có tài khoản?{" "}
                    <Link
                      to={"/dang-nhap"} 
                      className="text-cyan-800 hover:text-blue-900"
                    >
                      Đăng nhập ngay
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
