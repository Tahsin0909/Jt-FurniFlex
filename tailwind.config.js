/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E99F5',
        secondary: '#FAFAFA',
        activeNav: "#F8F8F8",
        footer_link: "#81859F",
        error: "#ef4444",
        discount: "#B92E2E"
      },
      margin: {
        m_small: '4px',
        m_base: '12px',
        m_primary: '16px',
        m_secondary: '24px',
        m_lg: '32px',
        m_xl: '60px',
      },
      gap: {

        gap_base: "16px",
        gap_primary: "20px"
      },
      fontSize: {
        text_small: '13px',
        text_base: '18px',
        text_primary: '30px',
        text_secondary: '36px',
        text_lg: '16px'
      },
      padding: {
        input_padding: "8px",
        button_padding: "12px",
        padding_base: "32px",
        padding_small: "8px",
        padding_medium: "12px",
        padding_md: "20px",
        padding_lg: "60px",
        padding_xl: "120px"
      },
      borderRadius: {
        rounded_primary: '8px',
        rounded_secondary: '16px',
        rounded_4px: '4px',

      },
      height: {
        h_base: "20px",
        h_medium: "48px",
        h_110vh: "110vh"

      },
      width: {
        w_base: "20px",
        w_medium: "48px",
        w_drawer:"300px",
        w_logo: "144px",
        w_445px: "445px",
      }

    },
  },
  plugins: [],
}