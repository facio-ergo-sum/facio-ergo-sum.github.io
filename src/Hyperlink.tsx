import PropTypes from 'prop-types';

interface HyperlinkProps {
    href: string;
    children: React.ReactNode;
}

export default function Hyperlink(props: HyperlinkProps) {
    return (<a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>)
}

Hyperlink.propTypes = {
    href: PropTypes.string.isRequired
}