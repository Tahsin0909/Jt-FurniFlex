/* eslint-disable react/prop-types */

const CompanyName = ({textColor}) => {
    return (
        <div>
            <p className={`${textColor} font-bold text-4xl`} >
                Furni<span className="text-blue-400">Flex</span>
            </p>
        </div>
    );
};

export default CompanyName;