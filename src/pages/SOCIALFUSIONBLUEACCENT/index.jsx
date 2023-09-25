import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SOCIALFUSIONBLUEACCENTPage = () => {
  const [serachvalue, setSerachvalue] = React.useState("");

  return (
    <>
      <div className="bg-gradient  flex flex-col font-poppins items-center justify-end mx-auto pt-9 sm:px-5 px-9 w-full">
        <div className="flex flex-col gap-[22px] items-center justify-end max-w-[1150px] mx-auto md:px-5 w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <Img
              className="md:flex-1 h-[51px] sm:h-auto md:mt-0 my-1 object-cover w-[18%] md:w-full"
              src="images/img_sflogo.png"
              alt="sflogo"
            />
            <Input
              name="serach"
              placeholder="Search "
              value={serachvalue}
              onChange={(e) => setSerachvalue(e)}
              className="font-bold leading-[normal] p-0 placeholder:text-blue_gray-50 sm:pr-5 text-blue_gray-50 text-left text-sm w-full"
              wrapClassName="bg-blue-500_0a flex md:flex-1 ml-12 md:ml-[0] md:mt-0 my-1 pl-5 pr-[35px] py-[13px] rounded-[25px] w-[49%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-6 mr-3 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#f1f1f1"
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setSerachvalue("")}
                  style={{
                    visibility: serachvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
            ></Input>
            <div className="flex md:flex-1 flex-col items-center justify-start ml-4 md:ml-[0] w-[29%] md:w-full">
              <div className="bg-blue-500_0a flex flex-row items-center justify-start p-[5px] rounded-[30px] w-full">
                <div className="flex flex-col h-[50px] items-center justify-start ml-0.5 w-[50px]">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_captainamerica.png"
                    alt="captainamerica"
                  />
                </div>
                <div className="flex flex-col items-start justify-start ml-[5px]">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtRobotoBold14"
                  >
                    <span className="text-white-A700 font-poppins text-left font-bold">
                      Jatin RSP
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      {" "}
                    </span>
                  </Text>
                  <Text
                    className="mt-[3px] text-[10px] text-cyan-300"
                    size="txtPoppinsRegular10"
                  >
                    @jatin_rsp
                  </Text>
                </div>
                <Img
                  className="h-4 ml-[115px] w-[17px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[78px] w-[13%] md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-[17px] items-end justify-start w-[68%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="mt-1.5 text-base text-cyan-300"
                    size="txtPoppinsBold16"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[86%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame2.svg"
                    alt="frameTwo"
                  />
                  <Text
                    className="text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    You Tube
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-end justify-start w-[94%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame1.svg"
                    alt="frameOne"
                  />
                  <Text
                    className="mt-[5px] text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    Instagram
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start w-[87%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    Analytics
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame_blue_gray_50.svg"
                    alt="frame_One"
                  />
                  <Text
                    className="text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    Notification
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-[69%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame_blue_gray_50_30x30.svg"
                    alt="frame_Two"
                  />
                  <Text
                    className="text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    Saved
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[69%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_frame_30x30.svg"
                    alt="frame_Three"
                  />
                  <Text
                    className="text-base text-blue_gray-50"
                    size="txtPoppinsBold16Bluegray50"
                  >
                    Profile
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] items-center justify-start md:ml-[0] ml-[86px] md:mt-0 mt-1 w-1/2 md:w-full">
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-8 justify-center w-[97%]"
                orientation="horizontal"
              >
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border2 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_42x42.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border3 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_1.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border4 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_2.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border5 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_3.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border6 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_4.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border7 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_5.png"
                    alt="profilepics"
                  />
                </div>
                <div className="border-2 border-solid flex flex-col h-[50px] items-center justify-start light_blue_A400_light_green_A200_border8 sm:ml-[0] p-[3px] rounded-[50%] w-full">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_profilepics_6.png"
                    alt="profilepics"
                  />
                </div>
              </List>
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-blue-500_0a flex flex-1 flex-col items-center justify-end p-[19px] rounded-[30px] w-full">
                  <div className="flex flex-col items-center justify-start mt-[5px] w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-between w-full">
                      <Img
                        className="h-[50px] md:h-auto sm:mt-0 mt-[3px] rounded-[50%] w-[50px]"
                        src="images/img_ashishchanchlani.png"
                        alt="ashishchanchlan"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-[7px] text-base text-blue_gray-50"
                            size="txtPoppinsBold16Bluegray50"
                          >
                            LISA 🖤💗
                          </Text>
                          <Img
                            className="h-6 mb-[7px] w-6"
                            src="images/img_frame_blue_gray_50_24x24.svg"
                            alt="frame"
                          />
                        </div>
                        <Text
                          className="mt-[3px] text-blue_gray-50 text-xs w-full"
                          size="txtPoppinsRegular12"
                        >
                          Whats good LA!! What a sweet ending to our US encore
                          tour🥰 Thank you for having us back. Love you guys!💖
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[280px] sm:h-auto mt-1 object-cover rounded-[26px] w-full"
                      src="images/img_thumbnail1.png"
                      alt="thumbnailOne"
                    />
                    <Img
                      className="h-[22px] mt-1.5"
                      src="images/img_group1.svg"
                      alt="groupOne"
                    />
                  </div>
                </div>
                <div className="bg-blue-500_0a flex flex-1 flex-col items-center justify-end p-[19px] rounded-[30px] w-full">
                  <div className="flex flex-col items-center justify-start mt-[5px] w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-between w-full">
                      <Img
                        className="h-[50px] md:h-auto sm:mt-0 mt-[3px] rounded-[50%] w-[50px]"
                        src="images/img_ashishchanchlani_50x50.png"
                        alt="ashishchanchlan"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="mt-[7px] text-base text-blue_gray-50"
                            size="txtPoppinsBold16Bluegray50"
                          >
                            Ashish Chanchlani
                          </Text>
                          <Img
                            className="h-6 mb-[7px] w-6"
                            src="images/img_frame_blue_gray_50_24x24.svg"
                            alt="frame"
                          />
                        </div>
                        <Text
                          className="mt-[3px] text-blue_gray-50 text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Holi Returns | Ashish chanchlani
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-[280px] sm:h-auto mt-[17px] object-cover rounded-[26px] w-full"
                      src="images/img_thumbnail1_280x497.png"
                      alt="thumbnailOne"
                    />
                    <Img
                      className="h-[22px] mt-[11px]"
                      src="images/img_group1.svg"
                      alt="groupOne"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-blue-500_0a flex flex-col items-center justify-start mb-[600px] md:ml-[0] ml-[23px] p-[27px] sm:px-5 rounded-[30px] w-[29%] md:w-full">
              <div className="flex flex-col items-end justify-start w-[98%] md:w-full">
                <div className="flex flex-row items-start justify-start w-full">
                  <div className="flex flex-col h-6 items-center justify-start p-[3px] w-6">
                    <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_fibrinterrogation.svg"
                        alt="fibrinterrogati"
                      />
                    </div>
                  </div>
                  <Text
                    className="ml-0.5 text-base text-cyan-300"
                    size="txtPoppinsBold16"
                  >
                    About Post
                  </Text>
                  <Text
                    className="ml-[77px] mt-1.5 text-[10px] text-cyan-300"
                    size="txtPoppinsRegular10"
                  >
                    #INSTAGRAM
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[26px] w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-blue_gray-50 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      <>
                        HEY BLINKs! 🖤💖
                        <br />
                        <br />
                        In my performance videos, I pour my heart into every
                        beat and move. It&#39;s all about embracing my love for
                        rap and dance, sharing my passion with you. Get ready
                        for an explosive mix of energy, style, and pure emotion!
                        Thank you for supporting me always. <br />
                        <br />
                        ~Lisa
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[15px]">
                  <Text
                    className="text-cyan-300 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Show More
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOCIALFUSIONBLUEACCENTPage;
