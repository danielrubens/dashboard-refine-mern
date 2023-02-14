import { TextIncreaseRounded } from '@mui/icons-material'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle'

const StatBox = ({title, subtitle, icon, progress, increase}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return(
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sc={{color: colors.grey[100]}}>{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress}/>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" sx={{color: colors.greenAccent[500]}}>{subtitle}</Typography>
                    <Typography variant="h5" fontWeight="italic" sc={{color: colors.greenAccent[600]}}>{TextIncreaseRounded}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox;