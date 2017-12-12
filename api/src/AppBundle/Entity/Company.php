<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Company
 * @ApiResource
 * @ORM\Table(name="company", indexes={@ORM\Index(name="IDX_4FBF094F131A4F72", columns={"commune_id"}), @ORM\Index(name="IDX_4FBF094F662DABFB", columns={"poviat_id"}), @ORM\Index(name="IDX_4FBF094F172C45F7", columns={"voivodship_id"})})
 * @ORM\Entity
 */
class Company
{
    /**
     * @var string
     *
     * @ORM\Column(name="street", type="string", length=50, nullable=true)
     */
    private $street;

    /**
     * @var string
     *
     * @ORM\Column(name="house_nr", type="string", length=20, nullable=true)
     */
    private $houseNr;

    /**
     * @var string
     *
     * @ORM\Column(name="flat_nr", type="string", length=20, nullable=true)
     */
    private $flatNr;

    /**
     * @var string
     *
     * @ORM\Column(name="postal_code", type="string", length=6, nullable=true)
     */
    private $postalCode;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=50, nullable=true)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(name="regon", type="string", length=20, nullable=true)
     */
    private $regon;

    /**
     * @var string
     *
     * @ORM\Column(name="nip", type="string", length=20, nullable=true)
     */
    private $nip;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=40, nullable=true)
     */
    private $phone;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=60, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="fax", type="string", length=40, nullable=true)
     */
    private $fax;

    /**
     * @var string
     *
     * @ORM\Column(name="pkd", type="string", length=100, nullable=true)
     */
    private $pkd;

    /**
     * @var string
     *
     * @ORM\Column(name="shortname", type="string", length=20, nullable=true)
     */
    private $shortname;

    /**
     * @var string
     *
     * @ORM\Column(name="longname", type="string", length=200, nullable=true)
     */
    private $longname;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="company_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="commune_id", type="integer", nullable=true)
     */
    private $communeId;

    /**
     * @var integer
     *
     * @ORM\Column(name="poviat_id", type="integer", nullable=true)
     */
    private $poviatId;

    /**
     * @var integer
     *
     * @ORM\Column(name="voivodship_id", type="integer", nullable=true)
     */
    private $voivodshipId;

    /**
     * @return string
     */
    public function getStreet()
    {
        return $this->street;
    }

    /**
     * @param string $street
     */
    public function setStreet($street)
    {
        $this->street = $street;
    }

    /**
     * @return string
     */
    public function getHouseNr()
    {
        return $this->houseNr;
    }

    /**
     * @param string $houseNr
     */
    public function setHouseNr($houseNr)
    {
        $this->houseNr = $houseNr;
    }

    /**
     * @return string
     */
    public function getFlatNr()
    {
        return $this->flatNr;
    }

    /**
     * @param string $flatNr
     */
    public function setFlatNr($flatNr)
    {
        $this->flatNr = $flatNr;
    }

    /**
     * @return string
     */
    public function getPostalCode()
    {
        return $this->postalCode;
    }

    /**
     * @param string $postalCode
     */
    public function setPostalCode($postalCode)
    {
        $this->postalCode = $postalCode;
    }

    /**
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param string $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return string
     */
    public function getRegon()
    {
        return $this->regon;
    }

    /**
     * @param string $regon
     */
    public function setRegon($regon)
    {
        $this->regon = $regon;
    }

    /**
     * @return string
     */
    public function getNip()
    {
        return $this->nip;
    }

    /**
     * @param string $nip
     */
    public function setNip($nip)
    {
        $this->nip = $nip;
    }

    /**
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return string
     */
    public function getFax()
    {
        return $this->fax;
    }

    /**
     * @param string $fax
     */
    public function setFax($fax)
    {
        $this->fax = $fax;
    }

    /**
     * @return string
     */
    public function getPkd()
    {
        return $this->pkd;
    }

    /**
     * @param string $pkd
     */
    public function setPkd($pkd)
    {
        $this->pkd = $pkd;
    }

    /**
     * @return string
     */
    public function getShortname()
    {
        return $this->shortname;
    }

    /**
     * @param string $shortname
     */
    public function setShortname($shortname)
    {
        $this->shortname = $shortname;
    }

    /**
     * @return string
     */
    public function getLongname()
    {
        return $this->longname;
    }

    /**
     * @param string $longname
     */
    public function setLongname($longname)
    {
        $this->longname = $longname;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getCommuneId()
    {
        return $this->communeId;
    }

    /**
     * @param int $communeId
     */
    public function setCommuneId($communeId)
    {
        $this->communeId = $communeId;
    }

    /**
     * @return int
     */
    public function getPoviatId()
    {
        return $this->poviatId;
    }

    /**
     * @param int $poviatId
     */
    public function setPoviatId($poviatId)
    {
        $this->poviatId = $poviatId;
    }

    /**
     * @return int
     */
    public function getVoivodshipId()
    {
        return $this->voivodshipId;
    }

    /**
     * @param int $voivodshipId
     */
    public function setVoivodshipId($voivodshipId)
    {
        $this->voivodshipId = $voivodshipId;
    }


}

