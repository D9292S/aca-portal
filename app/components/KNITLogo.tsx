// Logo component with KNIT gear and rose logo
import Image from 'next/image';

export default function KNITLogo() {
  return (
    <div className="flex items-center">
      <div className="relative w-20 h-20">
        {/* KNIT Gear Logo with Rose */}
        <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Gear */}
          <g className="animate-spin-slow" style={{transformOrigin: 'center'}}>
            <path 
              d="M50 5 L55 15 L65 12 L68 22 L78 22 L78 32 L85 35 L82 45 L88 50 L82 55 L85 65 L78 68 L78 78 L68 78 L65 88 L55 85 L50 95 L45 85 L35 88 L32 78 L22 78 L22 68 L15 65 L18 55 L12 50 L18 45 L15 35 L22 32 L22 22 L32 22 L35 12 L45 15 Z"
              fill="#FFD700"
              stroke="#B8860B"
              strokeWidth="1"
            />
            <circle cx="50" cy="50" r="35" fill="#FFF8DC" />
          </g>
          
          {/* Inner Circle with Institute Text */}
          <circle cx="50" cy="50" r="32" fill="white" stroke="#8B4513" strokeWidth="1" />
          
          {/* Rose in Center */}
          <g transform="translate(50, 50)">
            <path d="M0,-15 Q-5,-10 -5,-5 Q-5,5 0,10 Q5,5 5,-5 Q5,-10 0,-15" fill="#DC143C" />
            <path d="M0,10 L0,20" stroke="#228B22" strokeWidth="2" />
            <path d="M0,15 L-5,12" stroke="#228B22" strokeWidth="1.5" />
            <path d="M0,18 L5,15" stroke="#228B22" strokeWidth="1.5" />
          </g>
          
          {/* Text around the gear - simplified */}
          <text className="select-none">
            <textPath href="#circle" fill="#8B4513" fontSize="6" fontWeight="bold">
              KAMLA NEHRU INSTITUTE OF TECHNOLOGY
            </textPath>
          </text>
          <defs>
            <path id="circle" d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
          </defs>
          
          {/* Bottom text */}
          <text x="50" y="75" textAnchor="middle" fill="#8B4513" fontSize="5" fontWeight="bold">
            SULTANPUR
          </text>
        </svg>
      </div>
    </div>
  );
}
