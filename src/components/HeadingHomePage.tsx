type HeadingProps = {
    heading?: string;
    subHeading?: string;
    headingAlign?: "left" | "center";
};

const HeadingHomePage: React.FC<HeadingProps> = ({
    heading,
    subHeading,
    headingAlign,
}) => {
    return (
        <div className={`${headingAlign === "left" ? "text-left" : "mx-auto"} max-w-max mb-8 sm:mb-10 md:mb-12 lg:mb-15 space-y-1.5 sm:space-y-2`}>
            {/* Subheading with red rectangle */}
            <div className={`flex items-center gap-1.5 sm:gap-2 md:gap-2.5 justify-start`}>
                <span className="w-3 h-6 sm:w-4 sm:h-8 md:w-5 md:h-10 bg-button2 rounded-sm"></span>
                <h4 className="font-poppins leading-4 sm:leading-5 md:leading-5 text-button2 font-semibold text-xs sm:text-sm md:text-base">
                    {subHeading}
                </h4>
            </div>

            {/* Main heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold font-inter dark:text-white text-button leading-8 sm:leading-10 md:leading-11 lg:leading-12 tracking-wide">
                {heading}
            </h2>
        </div>
    );
};

export default HeadingHomePage;
