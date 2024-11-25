import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
}

const Logo = ({ color = 'white' }: LogoProps) => (
  <S.Wrapper color={color}>
  <svg width="158" height="48" viewBox="0 0 158 48" fill="none" xmlns="http://www.w3.org/2000/svg" role='img' aria-label='Won Games'>
<path d="M0.0547602 15.1246L0.0192849 35.7696C0.0110436 40.5656 5.35471 43.4324 9.34604 40.7731L29.9416 27.0514L50.4899 40.8438C54.4721 43.5168 59.8255 40.6684 59.8338 35.8723L59.8681 15.8752C59.8817 7.99357 52.3194 2.30981 44.7523 4.51426L43.8791 4.76865C34.2791 7.56535 24.0679 7.47109 14.5211 4.49764C7.35072 2.26432 0.0676653 7.61443 0.0547602 15.1246Z" fill="url(#paint0_linear_11_36)"/>
<path d="M30.1635 27.0569L24.13 22.7648C23.7654 22.5055 23.2697 22.8189 23.3478 23.2595L24.6409 30.5568L30.1635 27.0569Z" fill="#110F28" fill-opacity="0.15"/>
<path d="M7.59186 7.00005C2.48169 9.75488 3.07342 12 3.07343 14.5" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"/>
<path d="M57.2743 26.0004L57.2743 27.0004" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3.05249 18V20" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"/>
<path d="M57.2744 30.0004L57.2744 35.0004" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.0526 15L13.0527 21" stroke="#0B1788" stroke-width="2" stroke-linecap="round"/>
<path d="M10.0403 18L16.0649 18" stroke="#0B1788" stroke-width="2" stroke-linecap="round"/>
<path d="M45.7291 13.557C45.7291 14.1073 45.2806 14.557 44.723 14.557C44.1654 14.557 43.7168 14.1073 43.7168 13.557C43.7168 13.0066 44.1653 12.557 44.723 12.557C45.2806 12.557 45.7291 13.0066 45.7291 13.557Z" fill="#0B1788" stroke="#0B1788"/>
<path d="M50.7497 17.5004C50.7497 18.0507 50.3012 18.5004 49.7435 18.5003C49.1859 18.5003 48.7374 18.0507 48.7374 17.5003C48.7374 16.95 49.1859 16.5003 49.7435 16.5003C50.3011 16.5004 50.7497 16.95 50.7497 17.5004Z" fill="#0B1788" stroke="#0B1788"/>
<path d="M45.7292 21.5003C45.7292 22.0507 45.2807 22.5003 44.723 22.5003C44.1654 22.5003 43.7169 22.0507 43.7169 21.5003C43.7169 20.95 44.1654 20.5003 44.723 20.5003C45.2806 20.5003 45.7292 20.95 45.7292 21.5003Z" fill="#0B1788" stroke="#0B1788"/>
<path d="M40.7086 17.5003C40.7086 18.0506 40.2601 18.5003 39.7025 18.5003C39.1448 18.5003 38.6963 18.0506 38.6963 17.5003C38.6963 16.9499 39.1448 16.5003 39.7025 16.5003C40.2601 16.5003 40.7086 16.9499 40.7086 17.5003Z" fill="#0B1788" stroke="#0B1788"/>
<path d="M79.2628 12.53C79.2428 12.53 79.2228 12.53 79.2028 12.53C78.5228 12.63 78.0028 12.97 77.6428 13.55C77.4228 13.93 77.3128 14.33 77.3128 14.75C77.3128 14.85 77.3228 14.95 77.3428 15.05V15.08L78.7228 24.41C78.8028 24.95 79.0628 25.4 79.5028 25.76C79.9228 26.08 80.3928 26.24 80.9128 26.24C81.0328 26.24 81.1528 26.23 81.2728 26.21C81.9328 26.11 82.4428 25.79 82.8028 25.25C83.0628 24.89 83.1928 24.48 83.1928 24.02C83.1928 23.94 83.1828 23.85 83.1628 23.75L81.7828 14.42C81.7028 13.86 81.4428 13.39 81.0028 13.01C80.5828 12.67 80.1028 12.5 79.5628 12.5C79.4628 12.5 79.3628 12.51 79.2628 12.53ZM98.0428 12.5C97.5028 12.5 97.0228 12.68 96.6028 13.04C96.1628 13.4 95.9028 13.86 95.8228 14.42L94.4128 23.93C94.3928 24.01 94.3828 24.08 94.3828 24.14C94.3828 24.66 94.5528 25.12 94.8928 25.52C95.2528 25.98 95.7328 26.25 96.3328 26.33C96.4328 26.35 96.5428 26.36 96.6628 26.36C97.3228 26.36 97.8728 26.12 98.3128 25.64C98.6128 25.32 98.8028 24.94 98.8828 24.5V24.47V24.44L100.263 15.08V15.05C100.283 14.95 100.293 14.85 100.293 14.75C100.293 14.33 100.173 13.93 99.9328 13.55C99.5728 12.97 99.0628 12.63 98.4028 12.53C98.3628 12.53 98.3428 12.53 98.3428 12.53C98.2428 12.51 98.1428 12.5 98.0428 12.5ZM88.8028 20.54C88.7828 20.54 88.7628 20.54 88.7428 20.54C88.6628 20.54 88.5828 20.55 88.5028 20.57C88.1428 20.61 87.8128 20.73 87.5128 20.93C87.3528 21.03 87.2128 21.15 87.0928 21.29C87.0128 21.37 86.8828 21.51 86.7028 21.71L84.5128 24.41C84.3328 24.61 84.0928 24.89 83.7928 25.25C83.5128 25.59 83.2828 25.84 83.1028 26C82.7228 26.34 82.3528 26.58 81.9928 26.72C81.7928 26.8 81.5828 26.86 81.3628 26.9C81.2228 26.92 81.0728 26.93 80.9128 26.93C80.5328 26.93 80.1728 26.86 79.8328 26.72C79.5128 26.6 79.2328 26.43 78.9928 26.21L79.7428 31.34V31.4C79.7628 31.44 79.7728 31.49 79.7728 31.55C79.8128 31.73 79.8628 31.9 79.9228 32.06C80.0628 32.36 80.2728 32.62 80.5528 32.84C80.7328 33 80.9328 33.12 81.1528 33.2C81.3928 33.28 81.6428 33.32 81.9028 33.32C81.9428 33.32 81.9728 33.32 81.9928 33.32C82.1528 33.32 82.2928 33.31 82.4128 33.29C82.8728 33.19 83.2628 32.97 83.5828 32.63C83.6628 32.55 83.7628 32.45 83.8828 32.33L88.7728 26.3L93.5128 32.12C93.7528 32.4 93.9028 32.57 93.9628 32.63C94.3428 33.01 94.7928 33.24 95.3128 33.32C95.4128 33.32 95.5228 33.32 95.6428 33.32C95.9228 33.32 96.1928 33.27 96.4528 33.17C96.8728 32.99 97.2228 32.71 97.5028 32.33C97.6828 32.05 97.8028 31.74 97.8628 31.4V31.34L98.6128 26.33C98.2728 26.63 97.8828 26.83 97.4428 26.93C97.1828 27.01 96.9228 27.05 96.6628 27.05C96.5228 27.05 96.3728 27.04 96.2128 27.02C95.9328 26.98 95.6628 26.9 95.4028 26.78C95.1428 26.66 94.8128 26.41 94.4128 26.03C94.1528 25.77 93.8228 25.38 93.4228 24.86L90.9028 21.8C90.7628 21.62 90.6228 21.46 90.4828 21.32C90.2828 21.12 90.0928 20.97 89.9128 20.87C89.6128 20.67 89.2728 20.56 88.8928 20.54C88.8528 20.54 88.8228 20.54 88.8028 20.54ZM108.609 20.84C108.889 20.58 109.209 20.38 109.569 20.24C109.909 20.1 110.259 20.03 110.619 20.03C111.079 20.03 111.519 20.14 111.939 20.36C112.419 20.6 112.809 20.94 113.109 21.38C113.469 20.1 114.179 19.05 115.239 18.23C116.299 17.41 117.499 17 118.839 17C120.499 17 121.909 17.59 123.069 18.77C124.229 19.93 124.809 21.34 124.809 23C124.809 24.66 124.229 26.08 123.069 27.26C121.909 28.42 120.499 29 118.839 29C117.499 29 116.289 28.6 115.209 27.8C114.149 26.98 113.439 25.92 113.079 24.62C112.859 24.96 112.579 25.25 112.239 25.49C111.739 25.79 111.199 25.94 110.619 25.94C110.199 25.94 109.789 25.86 109.389 25.7C109.089 25.56 108.829 25.38 108.609 25.16C109.109 27.58 110.319 29.58 112.239 31.16C114.159 32.72 116.359 33.5 118.839 33.5C120.739 33.5 122.489 33.03 124.089 32.09C125.709 31.15 126.979 29.88 127.899 28.28C128.839 26.66 129.309 24.9 129.309 23C129.309 21.1 128.839 19.35 127.899 17.75C126.979 16.13 125.709 14.85 124.089 13.91C122.489 12.97 120.739 12.5 118.839 12.5C116.379 12.5 114.189 13.29 112.269 14.87C110.349 16.43 109.129 18.42 108.609 20.84ZM110.619 20.75C109.959 20.75 109.409 20.99 108.969 21.47C108.729 21.71 108.559 22 108.459 22.34C108.399 22.56 108.369 22.79 108.369 23.03C108.369 23.25 108.399 23.46 108.459 23.66C108.539 23.94 108.669 24.19 108.849 24.41C109.289 24.97 109.879 25.25 110.619 25.25C111.339 25.25 111.919 24.98 112.359 24.44C112.579 24.18 112.729 23.9 112.809 23.6C112.849 23.4 112.869 23.2 112.869 23C112.869 22.82 112.849 22.65 112.809 22.49C112.729 22.11 112.569 21.78 112.329 21.5C111.869 21 111.299 20.75 110.619 20.75ZM140.268 12.5C139.668 12.5 139.148 12.71 138.708 13.13C138.248 13.57 138.018 14.11 138.018 14.75V20.9C138.258 20.62 138.548 20.4 138.888 20.24C139.308 20.04 139.758 19.94 140.238 19.94H140.298C140.758 19.94 141.198 20.04 141.618 20.24C141.958 20.4 142.258 20.62 142.518 20.9C142.578 20.96 142.628 21.02 142.668 21.08L152.478 32.63C152.918 33.21 153.508 33.5 154.248 33.5C154.908 33.5 155.468 33.25 155.928 32.75C156.308 32.33 156.498 31.83 156.498 31.25V31.22V25.13C156.238 25.39 155.938 25.6 155.598 25.76C155.178 25.96 154.728 26.06 154.248 26.06C153.688 26.06 153.168 25.93 152.688 25.67C152.348 25.47 152.058 25.22 151.818 24.92L141.948 13.25C141.728 13.01 141.468 12.82 141.168 12.68C140.888 12.56 140.588 12.5 140.268 12.5ZM154.248 12.5C153.628 12.5 153.108 12.71 152.688 13.13C152.228 13.57 151.998 14.11 151.998 14.75V23.45C151.998 23.87 152.138 24.25 152.418 24.59C152.858 25.15 153.468 25.43 154.248 25.43C154.788 25.43 155.268 25.28 155.688 24.98C156.208 24.58 156.478 24.07 156.498 23.45V14.75C156.478 14.05 156.208 13.48 155.688 13.04C155.268 12.68 154.788 12.5 154.248 12.5ZM140.238 20.57C139.638 20.57 139.128 20.76 138.708 21.14C138.268 21.54 138.038 22.02 138.018 22.58V31.19V31.25C138.018 31.75 138.168 32.2 138.468 32.6C138.928 33.2 139.528 33.5 140.268 33.5C140.908 33.5 141.448 33.27 141.888 32.81C142.308 32.39 142.518 31.87 142.518 31.25V31.22V22.58C142.498 21.78 142.108 21.19 141.348 20.81C141.028 20.65 140.678 20.57 140.298 20.57H140.238Z" fill="currentColor"/>
<defs>
<linearGradient id="paint0_linear_11_36" x1="29.1592" y1="-7.4998" x2="30.1547" y2="49.0004" gradientUnits="userSpaceOnUse">
<stop stop-color="#405AEE"/>
<stop offset="1" stop-color="#53F9FF"/>
<stop offset="1" stop-color="#0F2C88"/>
</linearGradient>
</defs>
</svg>
  </S.Wrapper>
)

export default Logo