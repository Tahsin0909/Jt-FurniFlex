/* eslint-disable react/prop-types */

const CompanyName = ({textColor}) => {
    return (
        <div>
            <p className={`${textColor} font-bold text-text_secondary`} >
                Furni<span className="text-primary">Flex</span>
            </p>
        </div>
    );
};

export default CompanyName;