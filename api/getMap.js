export default function handler(req, res) {
    const { station } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const mapUrl = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=咖啡廳+near+${station}捷運站&zoom=15`;
    res.status(200).send(mapUrl);
}