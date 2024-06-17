import { LoaderStyle } from './Loader.styled'
import { ClipLoader } from 'react-spinners'

export const Loader = ({loading}: any) => {
    return (
        <LoaderStyle className={loading ? 'loaderActive' : ''}>
            <ClipLoader
                color={'#3F79CF'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </LoaderStyle>
    )
}
