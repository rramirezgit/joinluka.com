import { Box, Typography } from '@mui/material'
import tagsCSS from './tags.module.css'

interface Props {
  tags: string[]
  margin?: string
}

const Tags = ({ tags, margin = '20px' }: Props): JSX.Element => {
  return (
    <Box className={tagsCSS['tags-container']}>
      {tags.map((tag: string) => {
        return (
          <Box
            key={tag}
            className={tagsCSS['tag-container']}
            sx={{
              marginBottom: margin
            }}
          >
            <Typography className={tagsCSS.text}>{tag}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default Tags
