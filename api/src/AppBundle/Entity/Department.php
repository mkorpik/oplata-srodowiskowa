<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Department
 *
 * @ORM\Table(name="department", indexes={@ORM\Index(name="IDX_CD1DE18A131A4F72", columns={"commune_id"}), @ORM\Index(name="IDX_CD1DE18A979B1AD6", columns={"company_id"}), @ORM\Index(name="IDX_CD1DE18A662DABFB", columns={"poviat_id"}), @ORM\Index(name="IDX_CD1DE18A172C45F7", columns={"voivodship_id"})})
 * @ORM\Entity
 */
class Department
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=50, nullable=true)
     */
    private $city;

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
     * @ORM\Column(name="phone", type="string", length=40, nullable=true)
     */
    private $phone;

    /**
     * @var string
     *
     * @ORM\Column(name="fax", type="string", length=40, nullable=true)
     */
    private $fax;

    /**
     * @var string
     *
     * @ORM\Column(name="longname", type="string", length=200, nullable=true)
     */
    private $longname;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=60, nullable=true)
     */
    private $email;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="department_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\AdmCommune
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\AdmCommune")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="commune_id", referencedColumnName="id")
     * })
     */
    private $commune;

    /**
     * @var \AppBundle\Entity\Company
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="company_id", referencedColumnName="id")
     * })
     */
    private $company;

    /**
     * @var \AppBundle\Entity\AdmPoviat
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\AdmPoviat")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="poviat_id", referencedColumnName="id")
     * })
     */
    private $poviat;

    /**
     * @var \AppBundle\Entity\AdmVoivodship
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\AdmVoivodship")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="voivodship_id", referencedColumnName="id")
     * })
     */
    private $voivodship;


}

