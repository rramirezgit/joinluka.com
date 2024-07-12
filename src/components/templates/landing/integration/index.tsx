import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import lukaCSS from "@/styles/luka.module.css";
import integrationCSS from './integration.module.css'
import Image from 'next/image'
import int from "@/assets/integration/integration.svg";
import back from "@/assets/integration/background.svg";

const Integration = (): JSX.Element => {
  return (
    <Box
      className={clsx(
        integrationCSS['integration-container'],
        lukaCSS['flex-column']
      )}
    >
      <Box
        className={integrationCSS['integration-relative-container']}
        sx={{
          margin: '0px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          maxWidth: '1335px',
          width: '100%',
          position: 'relative'
        }}
      >
        <Box
          className={integrationCSS['integration-full-container']}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '665px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            padding: '0px 35px'
          }}
        >
          <Typography className={integrationCSS.toptitle}>
            One integration
          </Typography>
          <Typography className={integrationCSS.title}>
            One single integration to enable and manage differents payment
            solutions & billing presentations seamlessly
          </Typography>
          <Typography className={integrationCSS.subtitle}>
            LUKA offers a single integration for connections, facilitating
            geographical expansion, ensuring future-proof efficiency, and
            centralizing payment management for seamless transactions.
          </Typography>
        </Box>
        <Box
          className={integrationCSS['integration-img-container']}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-end',
            marginTop: '300px'
          }}
        >
          <Box sx={{ maxWidth: '1100px' }}>
            <Image
              src={int}
              alt="coin"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Integration
