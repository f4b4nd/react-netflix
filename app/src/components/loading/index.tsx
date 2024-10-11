import { LockBody, ReleaseBody, Spinner, Picture } from './style'

export default function Loading({ src, ...restProps }: LoadingProps) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}