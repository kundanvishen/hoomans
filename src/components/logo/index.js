import * as React from 'react'

const Logo = ({color, height}) => {
  const h = height? height : '25';
  return (
    <svg width="250" height={h} color="red" viewBox="0 0 250 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.40645 9.89964H30.6365V0H36.088V25H30.6365V15.3741H5.40645V25H0V0H5.40645V9.89964Z" fill={color}/>
      <path d="M47.1977 25C45.9662 25 44.8098 24.7719 43.7285 24.3157C42.6472 23.8291 41.7011 23.1904 40.8901 22.3996C40.1092 21.5785 39.4784 20.6204 38.9979 19.5255C38.5473 18.4307 38.3221 17.2597 38.3221 16.0128C38.3221 14.7658 38.5473 13.5949 38.9979 12.5C39.4784 11.4051 40.1092 10.4623 40.8901 9.67153C41.7011 8.85037 42.6472 8.21168 43.7285 7.75547C44.8098 7.26886 45.9662 7.02555 47.1977 7.02555H62.1104C63.3419 7.02555 64.4983 7.26886 65.5796 7.75547C66.6609 8.21168 67.592 8.85037 68.3729 9.67153C69.1839 10.4623 69.8146 11.4051 70.2652 12.5C70.7457 13.5949 70.986 14.7658 70.986 16.0128C70.986 17.2597 70.7457 18.4307 70.2652 19.5255C69.8146 20.6204 69.1839 21.5785 68.3729 22.3996C67.592 23.1904 66.6609 23.8291 65.5796 24.3157C64.4983 24.7719 63.3419 25 62.1104 25H47.1977ZM47.1977 12.5C46.2365 12.5 45.4105 12.8498 44.7197 13.5493C44.0589 14.2184 43.7285 15.0395 43.7285 16.0128C43.7285 16.986 44.0589 17.8224 44.7197 18.5219C45.4105 19.191 46.2365 19.5255 47.1977 19.5255H62.1104C63.0716 19.5255 63.8826 19.191 64.5433 18.5219C65.2342 17.8224 65.5796 16.986 65.5796 16.0128C65.5796 15.0395 65.2342 14.2184 64.5433 13.5493C63.8826 12.8498 63.0716 12.5 62.1104 12.5H47.1977Z" fill={color}/>
      <path d="M81.8679 25C80.6364 25 79.4801 24.7719 78.3988 24.3157C77.3175 23.8291 76.3714 23.1904 75.5604 22.3996C74.7795 21.5785 74.1487 20.6204 73.6681 19.5255C73.2176 18.4307 72.9923 17.2597 72.9923 16.0128C72.9923 14.7658 73.2176 13.5949 73.6681 12.5C74.1487 11.4051 74.7795 10.4623 75.5604 9.67153C76.3714 8.85037 77.3175 8.21168 78.3988 7.75547C79.4801 7.26886 80.6364 7.02555 81.8679 7.02555H96.7807C98.0122 7.02555 99.1685 7.26886 100.25 7.75547C101.331 8.21168 102.262 8.85037 103.043 9.67153C103.854 10.4623 104.485 11.4051 104.935 12.5C105.416 13.5949 105.656 14.7658 105.656 16.0128C105.656 17.2597 105.416 18.4307 104.935 19.5255C104.485 20.6204 103.854 21.5785 103.043 22.3996C102.262 23.1904 101.331 23.8291 100.25 24.3157C99.1685 24.7719 98.0122 25 96.7807 25H81.8679ZM81.8679 12.5C80.9068 12.5 80.0808 12.8498 79.3899 13.5493C78.7292 14.2184 78.3988 15.0395 78.3988 16.0128C78.3988 16.986 78.7292 17.8224 79.3899 18.5219C80.0808 19.191 80.9068 19.5255 81.8679 19.5255H96.7807C97.7418 19.5255 98.5528 19.191 99.2136 18.5219C99.9044 17.8224 100.25 16.986 100.25 16.0128C100.25 15.0395 99.9044 14.2184 99.2136 13.5493C98.5528 12.8498 97.7418 12.5 96.7807 12.5H81.8679Z" fill={color}/>
      <path d="M123.521 7.02555C124.723 7.02555 125.879 7.23844 126.991 7.66423C128.102 8.05961 129.093 8.68309 129.964 9.53467C130.775 8.74392 131.706 8.13565 132.758 7.70986C133.809 7.25365 134.935 7.02555 136.137 7.02555H143.39C144.622 7.02555 145.778 7.26886 146.859 7.75547C147.941 8.21168 148.872 8.85037 149.653 9.67153C150.464 10.4623 151.094 11.4051 151.545 12.5C152.025 13.5949 152.266 14.7658 152.266 16.0128V25H146.859V16.0128C146.859 14.9179 146.484 14.0663 145.733 13.458C145.012 12.8193 144.141 12.5 143.12 12.5H136.137C135.175 12.5 134.349 12.8498 133.659 13.5493C132.998 14.2184 132.667 15.0395 132.667 16.0128V25H127.261V16.0128C127.261 14.9179 126.886 14.0663 126.135 13.458C125.414 12.8193 124.543 12.5 123.521 12.5H116.538C115.577 12.5 114.751 12.8498 114.06 13.5493C113.399 14.2184 113.069 15.0395 113.069 16.0128V25H107.663V16.0128C107.663 14.7658 107.888 13.5949 108.338 12.5C108.819 11.4051 109.45 10.4623 110.231 9.67153C111.042 8.85037 111.988 8.21168 113.069 7.75547C114.15 7.26886 115.307 7.02555 116.538 7.02555H123.521Z" fill={color}/>
      <path d="M177.147 25H163C161.768 25 160.612 24.7719 159.531 24.3157C158.449 23.8291 157.503 23.1904 156.692 22.3996C155.911 21.5785 155.281 20.6204 154.8 19.5255C154.35 18.4307 154.124 17.2597 154.124 16.0128C154.124 14.7658 154.35 13.5949 154.8 12.5C155.281 11.4051 155.911 10.4623 156.692 9.67153C157.503 8.85037 158.449 8.21168 159.531 7.75547C160.612 7.26886 161.768 7.02555 163 7.02555H176.921C178.153 7.02555 179.309 7.26886 180.391 7.75547C181.472 8.21168 182.403 8.85037 183.184 9.67153C183.995 10.4623 184.626 11.4051 185.076 12.5C185.557 13.5949 185.797 14.7658 185.797 16.0128V25H180.391V16.0128C180.391 15.0395 180.045 14.2184 179.354 13.5493C178.694 12.8498 177.883 12.5 176.921 12.5H163C162.039 12.5 161.213 12.8498 160.522 13.5493C159.861 14.2184 159.531 15.0395 159.531 16.0128C159.531 16.986 159.861 17.8224 160.522 18.5219C161.213 19.191 162.039 19.5255 163 19.5255H177.147V25Z" fill={color}/>
      <path d="M196.306 7.02555H208.335C209.537 7.02555 210.678 7.26886 211.76 7.75547C212.841 8.21168 213.787 8.85037 214.598 9.67153C215.409 10.4623 216.04 11.4051 216.49 12.5C216.971 13.5949 217.211 14.7658 217.211 16.0128V25H211.76V16.0128C211.76 15.0395 211.429 14.2184 210.768 13.5493C210.108 12.8498 209.297 12.5 208.335 12.5H196.306C195.345 12.5 194.519 12.8498 193.828 13.5493C193.167 14.2184 192.837 15.0395 192.837 16.0128V25H187.431V16.0128C187.431 14.7658 187.656 13.5949 188.106 12.5C188.587 11.4051 189.218 10.4623 189.999 9.67153C190.81 8.85037 191.756 8.21168 192.837 7.75547C193.918 7.26886 195.075 7.02555 196.306 7.02555Z" fill={color}/>
      <path d="M219.769 19.6624H234.772L229.455 12.9562C228.975 12.3479 228.705 11.7092 228.645 11.0401C228.584 10.3406 228.69 9.70195 228.96 9.12409C229.26 8.51582 229.696 8.01399 230.266 7.61861C230.837 7.22324 231.498 7.02555 232.249 7.02555H250V12.3631H235.673L240.989 19.0693C241.47 19.6776 241.725 20.3315 241.755 21.031C241.815 21.7001 241.71 22.3388 241.44 22.9471C241.169 23.5249 240.749 24.0116 240.178 24.4069C239.608 24.8023 238.947 25 238.196 25H219.769V19.6624Z" fill={color}/>
    </svg>
  )
}

export default Logo