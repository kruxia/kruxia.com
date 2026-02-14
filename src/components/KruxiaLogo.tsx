interface KruxiaLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const KruxiaLogo = ({ variant = 'light', className = '' }: KruxiaLogoProps) => {
  const fill = variant === 'light' ? '#fff' : '#1A1A2E';
  const stroke = variant === 'light' ? '#fff' : '#1A1A2E';

  return (
    <svg
      className={className}
      viewBox="0 0 294.64 288.43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M285.05,144.74v140.98H3.08V144.74m281.96,0C285.05,66.87,221.93,3.75,144.07,3.75S3.08,66.87,3.08,144.74"
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
      <text
        fill={fill}
        fontFamily="TrebuchetMS-Bold, 'Trebuchet MS'"
        fontSize="335.56px"
        fontWeight={700}
        transform="translate(39.09 286.99)"
      >
        k
      </text>
      <path
        fill={fill}
        d="M212.63,42.2c6.57,0,12.17,2.33,16.82,6.98,4.65,4.65,6.98,10.26,6.98,16.82s-2.33,12.17-6.98,16.82c-4.65,4.65-10.26,6.98-16.82,6.98s-12.17-2.32-16.82-6.98c-4.65-4.65-6.98-10.26-6.98-16.82s2.32-12.17,6.98-16.82c4.65-4.65,10.26-6.98,16.82-6.98Z"
      />
      <circle cx="168.26" cy="132.28" r="81.12" fill="none" stroke={stroke} strokeMiterlimit={10} strokeWidth={5} />
    </svg>
  );
};

export default KruxiaLogo;
