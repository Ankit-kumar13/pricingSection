import CheckedIcons from "../icons/CheckedIcon";

function FeatureItem() {
    const featuresList = [
        {
          feature: "128 available credits for all images"
        },
        {
          feature: "Up to 3 users"
        },
        {
          feature: "24 hour response time"
        },
        {
          feature: "Advanced analytics"
        }
    
      ];
    const featureElements = featuresList.map((feature) => (
        <span>
            <CheckedIcons/>
            {feature.feature}
        </span>
    ));

    return (
        <div>
            {featureElements}
        </div>
    )
}

export default FeatureItem;